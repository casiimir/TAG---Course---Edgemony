export interface ListItemData {
  count: null;
  data: ItemData[];
  error: null;
  status: number;
  statusText: string;
}

export interface ItemData {
  content: string;
  created_at: string;
  id: number;
}
