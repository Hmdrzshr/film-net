import Style from "./style";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import getApi from "../../Utils/getApi";
import ColorPallete from "../../AboutStyle/colorPallete";

export default function SearchTable({ getInputData }) {
   return (
      <Style>
         <div className="table mini-radius">
            <div className="items">
               <ul className="d-flex gap-15">
                  <li className="col-4 button d-flex j-between align-center medium-radius">
                     <h3>نوع</h3>
                     <i className="fa-solid fa-chevron-down"></i>
                  </li>
                  <li className="col-4 button d-flex j-between align-center medium-radius">
                     <h3>دسته بندی</h3>
                     <i className="fa-solid fa-chevron-down"></i>
                  </li>
                  <li className="col-4 button d-flex j-between align-center medium-radius">
                     <h3>ژانر</h3>
                     <i className="fa-solid fa-chevron-down"></i>
                  </li>
                  <li className="col-4 button d-flex j-between align-center medium-radius">
                     <h3>کشور سازنده</h3>
                     <i className="fa-solid fa-chevron-down"></i>
                  </li>
                  <li className="col-4 button d-flex j-between align-center medium-radius">
                     <h3>ویژگی ها</h3>
                     <i className="fa-solid fa-chevron-down"></i>
                  </li>
                  <li className="col-4 button d-flex j-between align-center medium-radius">
                     <h3>ترتیب نمایش</h3>
                     <i className="fa-solid fa-chevron-down"></i>
                  </li>
               </ul>
            </div>
            <div className="search-line d-flex align-center gap-30">
               <div className="input-box">
                  <Input
                     type="text"
                     size="large"
                     style={{
                        backgroundColor: `${ColorPallete.pageBackgroundColor}`,
                        border: "none",
                     }}
                     placeholder="جستجو..."
                     suffix={<SearchOutlined rotate={80} />}
                     onChange={(event) => {
                        getInputData(event.target.value);
                     }}
                  />
               </div>
               <div className="delete-filters">
                  <h3 className="button disable medium-radius ">حذف همه فیلترها</h3>
               </div>
            </div>
         </div>
      </Style>
   );
}
