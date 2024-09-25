import React from "react";
import Image from "next/image";

function Clientlogoslider() {
  return (
    <>
      <div className="client-logo">
        <div className="client-logo__slider">
          <div>
            <Image src={LT} alt="LT Logo" className="client-logo__image" />
          </div>

          <div>
            <Image
              src={Serum}
              alt="Serum Logo"
              className="client-logo__image"
            />
          </div>
          <div>
            <Image
              src={TigerAnalytics}
              alt="Tiger Analytics Logo"
              className="client-logo__image"
            />
          </div>
          <div>
            <Image
              src={TvsCredit}
              alt="TVS Credit Logo"
              className="client-logo__image"
            />
          </div>
          <div>
            <Image
              src={IndianCements}
              alt="Indian Cements Logo"
              className="client-logo__image"
            />
          </div>
          <div>
            <Image
              src={Raymond}
              alt="Raymond Logo"
              className="client-logo__image"
            />
          </div>
          <div>
            <Image
              src={TvsCredit}
              alt="TVS Credit Logo"
              className="client-logo__image"
            />
          </div>
          <div>
            <Image
              src={IndianCements}
              alt="Indian Cements Logo"
              className="client-logo__image"
            />
          </div>
          <div>
            <Image
              src={Raymond}
              alt="Raymond Logo"
              className="client-logo__image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Clientlogoslider;
