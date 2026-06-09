"use client";
import { PARTNERS_IMAGE } from "@/constants/partner";
import Image from "next/image";

export default function PartnerSection() {
  return (
    <section className="section-brand-mosaic clearfix">
      <div className="container">
        <h2 className="title-brand-mosaic">
          ĐỒNG HÀNH CÙNG DOANH NGHIỆP HÀNG ĐẦU
        </h2>
        <p className="subtitle-brand-mosaic">
          Hơn 5,000+ doanh nghiệp uy tín hàng đầu tin tưởng hợp tác và đồng hành
          phát triển cùng hệ sinh thái tuyển dụng Recland
        </p>
        <div className="brand-grid">
          {/* <!-- Row 1 --> */}
          {/* <!-- Bảo Việt Group --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-baoviet.png"
              alt="Bảo Việt Group"
            />
          </div>
          {/* <!-- FPT --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-fpt.webp"
              alt="FPT"
            />
          </div>
          {/* <!-- Panasonic --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-panasonic.png"
              alt="Panasonic"
            />
          </div>
          {/* <!-- Viettel --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-viettel.png"
              alt="Viettel"
            />
          </div>
          {/* <!-- ACB --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-acb.png"
              alt="ACB Bank"
            />
          </div>

          {/* <!-- Row 2 --> */}
          {/* <!-- MSB --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-msb.jpg"
              alt="MSB Bank"
            />
          </div>
          {/* <!-- Techcombank --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-techcombank.png"
              alt="Techcombank"
            />
          </div>
          {/* <!-- VNPT --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-vnpt.png"
              alt="VNPT"
            />
          </div>
          {/* <!-- Saltlux Technology --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-saltlux.png"
              alt="Saltlux Technology"
            />
          </div>
          {/* <!-- Winki English --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-winki-english.jpg"
              alt="Winki English"
            />
          </div>

          {/* <!-- Row 3 --> */}
          {/* <!-- Logo 1-1 --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-1-1.png"
              alt="Partner Logo"
            />
          </div>
          {/* <!-- Partner Logo 9 --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-partner-9.png"
              alt="Partner Logo"
            />
          </div>
          {/* <!-- Partner Logo /10 --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-partner-10.png"
              alt="Partner Logo"
            />
          </div>
          {/* <!-- Partner Logo /12 --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-partner-12.png"
              alt="Partner Logo"
            />
          </div>
          {/* <!-- TextLD --> */}
          <div className="brand-tile">
            <img
              src="/images/logo/doi_tac_logo/logo-textld.png"
              alt="Partner Logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
