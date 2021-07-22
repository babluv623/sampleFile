import React from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  let history = useHistory();
  return (
    <>
      <button onClick={() => history.goBack()}>Back</button>
      <button style={{ float: "right" }} onClick={() => history.goForward()}>
        Forward
      </button>
      <div className="item">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        molestias assumenda, harum exercitationem maxime eos placeat sunt
        mollitia sapiente eius consectetur est suscipit quidem omnis quo
        corrupti asperiores molestiae adipisci magnam? Suscipit veniam impedit
        ab illum quam officiis, vitae non recusandae dicta molestiae corporis at
        laudantium cumque nesciunt sed tempora fuga voluptatum, rem modi eos!
        Dicta a omnis porro iste perferendis tenetur quasi totam earum iure
        ratione, neque et ipsam cum sunt ea dolor eligendi sint! Fuga dicta
        fugit necessitatibus unde ratione laboriosam ex beatae minima
        recusandae, nihil exercitationem officia quae, ad in earum temporibus
        tempore quas perferendis ut nam, totam cum corporis harum eveniet?
        Veritatis quas, perferendis quibusdam quae modi quo eveniet cumque
        libero aliquam minima, est esse dolorum possimus. Quae voluptatem eaque
        vel laboriosam ipsum ipsam similique porro maxime deleniti in corporis,
        non quod, saepe ex amet eveniet quis pariatur ullam facilis. Corrupti
        facilis animi, eveniet error deserunt repellat odit aspernatur
        similique, fugit fuga eos beatae neque omnis asperiores praesentium
        minima. Dolorum, expedita rem doloremque dolor similique odio quibusdam
        quam atque maxime aspernatur necessitatibus at perspiciatis facere ex
        possimus tempora beatae eius assumenda mollitia excepturi itaque.
        Temporibus, maxime totam veniam libero illum laudantium numquam quos
        voluptate ducimus et a possimus in aliquam minima repudiandae amet
        dolorem, non assumenda, error eligendi nam consectetur voluptatem velit?
        Laborum, dolore omnis, cupiditate at blanditiis animi officiis iste
        voluptatum aspernatur quidem magni voluptas ab ad excepturi temporibus
        eos labore illo, voluptates veniam ut molestiae? Illum doloremque
        molestias minus obcaecati unde voluptate, architecto, qui suscipit earum
        laudantium, quod nostrum aspernatur asperiores ex. Alias numquam
        deserunt rem pariatur dicta natus quos itaque, sit reiciendis impedit
        aliquam ipsam placeat et, hic molestias. Nesciunt, id incidunt sed fuga
        modi officiis laboriosam consequatur exercitationem rerum similique
        earum quod quaerat tempora? Commodi non aliquam culpa porro qui
        cupiditate voluptatem sed, et doloribus dolore dolorem, vero modi
        ratione molestiae laboriosam, cumque excepturi quae vitae corporis
        soluta itaque! Dolor, nostrum? Ut molestias, ipsa commodi minima at
        doloremque explicabo possimus suscipit dolorem consequuntur mollitia,
        quae nobis nam laudantium enim perspiciatis veniam quod expedita aut
        eligendi! Cupiditate voluptates cum ut rem optio aperiam officia placeat
        fugit facere voluptatum corporis dolores fugiat temporibus reiciendis,
        repellendus, ea molestias velit id excepturi voluptas, dignissimos
        consequuntur. Earum blanditiis consectetur quod magnam! Totam aperiam
        excepturi ut repudiandae, animi, facilis architecto eos officiis
        repellendus aliquid autem quo ea impedit ab numquam laborum eum iste
        nesciunt aspernatur deleniti voluptatem. Laboriosam iure, at harum enim
        ipsum, veniam assumenda dolorem, labore voluptas similique obcaecati
        repudiandae et sunt temporibus sapiente recusandae. Hic temporibus quia
        quasi, sequi, assumenda ipsum omnis culpa a aspernatur dolorem facere
        autem dolore sit rerum! Id, blanditiis labore! Quis dolor consectetur ex
        iure sed numquam ratione ipsa nobis dicta quos veniam necessitatibus id
        culpa quod voluptatum aspernatur minus illo pariatur excepturi, quo
        sequi deleniti? Quam nobis adipisci vitae consectetur dolorem cum quo
        placeat voluptate sapiente fuga voluptas aut similique reiciendis
        laudantium ut iure perspiciatis, culpa magnam non inventore veritatis
        quos? Iure officiis odio aut numquam fugit maxime consequuntur?
        Similique, beatae.
      </div>
    </>
  );
};

export default About;
