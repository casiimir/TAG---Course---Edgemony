import { supabase } from "@/services/supabase";

const onWriteDB = async (table, column, value) => {
  try {
    const res = await supabase
      .from(table)
      .insert([{ [column]: value }])
      .select();

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default async function handler(req, res) {
  if (req.headers.writeondb) {
    const body = JSON.parse(req.body);

    onWriteDB(body.table, body.column, body.value);
    res.status(200).json({ status: "200", message: "ok" });
  } else if (req.headers.getfromdb) {
    const response = await supabase.from("todo-list-data").select("*");

    res.status(200).json({ status: "200", data: response });
  } else {
    res.status(404).json({ status: "404", message: "ok" });
  }
}
