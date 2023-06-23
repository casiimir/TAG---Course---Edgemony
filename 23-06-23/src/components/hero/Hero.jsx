import { useCallback, useState, memo, useRef } from "react";
import styles from "./index.module.scss";

const Hero = () => {
  const heroTitleEl = useRef(null);
  const [value, setValue] = useState(0);
  // const [state, setState] = useState(false);

  // const onHandleClick = () => {
  //   heroTitleEl.current.style.transform = "translateY(200px)";
  // };

  const onHandleScroll = (e) => {
    // console.log(e.target.scrollTop);
    heroTitleEl.current.style.transform = `scale(${
      e.target.scrollTop / 100 || 1
    })`;
    setValue((prev) => prev + 1);
    // setState((prev) => !prev);

    // heroTitleEl.current.style.transform = `translateY(${e.target.scrollTop}px)`;
  };

  const onHandleScrollCallback = useCallback(
    (e) => {
      heroTitleEl.current.style.transform = `scale(${
        e.target.scrollTop / 100 || 1
      })`;
      setValue((prev) => prev + 1);
      console.log(value);
    },
    [value]
  );

  // const onHandleClick = () => {
  //   console.log("Click!");
  // };

  // const onHandleClickPerf = useCallback(() => {
  //   console.log("Click!");
  // });

  return (
    <div className={styles.hero}>
      <div className={styles.heading}>
        <img
          className={styles.heroImage}
          src="https://picsum.photos/1000/400"
          alt="hero image"
        />
        <h1 className={styles.heroTitle} ref={heroTitleEl}>
          Welcome, hero!
        </h1>
      </div>

      {/* <button onClick={onHandleClick}>click No useCall</button>
      <button onClick={onHandleClickPerf}>click YES useCall</button> */}

      <div className={styles.content}>
        <p onScroll={onHandleScrollCallback}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          voluptates non provident, possimus sequi officiis iure magni veritatis
          hic minima voluptatem esse eos voluptas, minus, quo sed laborum soluta
          sit. Perspiciatis, placeat delectus qui tempora earum quo mollitia
          iste iusto animi nihil ex facere accusamus dignissimos sit, harum
          voluptates dicta? Veritatis, ad debitis veniam cumque alias fugiat
          quisquam voluptatem asperiores. Asperiores beatae odit deserunt eos
          voluptatem illum nisi, perspiciatis officiis autem magnam, ducimus
          tempora similique vero, sint ipsam aspernatur veniam doloremque minus.
          Harum placeat sequi praesentium animi esse rerum dolorem. Adipisci qui
          provident saepe officiis deserunt veritatis atque ipsum nobis vitae ea
          consequuntur, doloremque dolorem expedita maxime. Labore ex illum eos
          alias dolor dolores assumenda magnam voluptatem amet, nulla beatae.
          Veritatis dolorem, esse fuga porro eaque adipisci labore obcaecati
          tempora sed ipsam voluptatem explicabo amet perferendis vitae
          architecto, laborum veniam, similique inventore. Sapiente similique
          eos iure quaerat placeat praesentium modi. Beatae quis, minima optio
          sunt ut ipsam, mollitia dolore odit suscipit eum sapiente. Voluptatum
          asperiores possimus assumenda quod in! Culpa minima veritatis
          delectus! Repellat deleniti asperiores aliquam? Adipisci, reiciendis
          odit! Odio, corrupti architecto molestias odit natus voluptate
          incidunt aliquam sit quae eligendi rerum sunt possimus repudiandae
          ducimus facere at eaque labore amet dolores doloremque suscipit
          debitis aut libero veritatis? Dolores. Esse sed nesciunt perferendis
          ratione nisi laborum delectus voluptates fugiat itaque consequatur rem
          adipisci, quo alias porro? Libero architecto aperiam, soluta quas
          repellendus necessitatibus! Voluptas magni cumque harum minus hic. A
          eaque aliquam ipsum enim recusandae perspiciatis libero blanditiis,
          neque iste impedit eveniet? Eius optio qui omnis velit cupiditate
          ullam alias veniam magni minima in, similique, deserunt eos. Ad, ab?
          Consectetur suscipit cumque recusandae dolorem explicabo maiores nulla
          officiis, vitae ea labore mollitia cum. Beatae officiis in ex
          perferendis, aliquam repellendus obcaecati nobis minus dolor
          blanditiis incidunt, sit, itaque ratione! Ipsam, iste sapiente labore
          voluptatibus deserunt, nisi repellendus laudantium quasi saepe
          voluptas nihil ab? Ex ut ab delectus explicabo esse assumenda? Odio,
          doloremque laudantium. Amet earum nobis delectus nisi nostrum!
          Mollitia incidunt eum, delectus distinctio eligendi aliquid ut
          molestiae placeat autem minima tempora maiores suscipit temporibus
          sapiente ducimus illo. Rerum dolorum, officia nobis ratione corrupti
          excepturi quae pariatur facere quisquam! Nobis tenetur perspiciatis
          dignissimos deserunt nihil rem culpa, quas recusandae, veniam
          perferendis saepe, quis magnam facilis alias quisquam esse odio facere
          provident officia. Laudantium reiciendis soluta debitis repudiandae,
          cupiditate modi? Asperiores, est pariatur architecto assumenda
          aspernatur saepe. Veniam voluptatum reprehenderit sunt neque
          blanditiis cupiditate dolorem maiores eveniet voluptatibus, maxime
          perspiciatis sapiente fugiat corporis magnam asperiores facilis.
          Similique eum dolores non. Quibusdam illo totam quam, ea odit modi
          ipsam, dolorem recusandae enim vitae fuga libero. Error quas inventore
          explicabo repellendus quod, necessitatibus omnis praesentium rerum
          recusandae sit sunt fuga sint laudantium! Iure perspiciatis
          consequuntur soluta id non minima libero voluptatem neque facere error
          adipisci porro quae eum itaque quibusdam beatae esse tempora et,
          impedit fugiat nam! At eveniet fuga provident nulla. Quas, numquam
          unde dolore neque quisquam magnam modi sapiente tempora totam maiores
          veniam et fuga. Temporibus ducimus, sapiente expedita, blanditiis quas
          totam laborum libero, minima perspiciatis accusantium error similique
          rerum. Ratione sapiente quam, in ab incidunt fugit ex officiis
          repudiandae expedita eos quasi facilis ducimus obcaecati voluptas
          eveniet, rem, vitae aliquid ad. Rerum numquam maxime animi. Illo
          blanditiis necessitatibus quod! Nisi deserunt tempore consequuntur cum
          officiis! Atque dolorum at ullam quia nemo et fuga similique
          repudiandae corrupti eum vel incidunt recusandae fugiat quas eveniet
          reiciendis nam nulla, doloribus aut beatae! Consequatur similique
          corrupti numquam eum facilis! Veniam doloremque dolorem, culpa beatae
          non ad facilis laboriosam dolores aspernatur ipsum natus at, quam
          distinctio provident blanditiis voluptate odio? Saepe id tempora
          error.
        </p>
      </div>
    </div>
  );
};

export default memo(Hero);
