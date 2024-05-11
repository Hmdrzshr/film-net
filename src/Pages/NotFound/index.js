import Style from "./style";
import Layout from "../../Components/Layout";

export default function NotFound() {
   return (
      <Style>
         <Layout>
            <div className="not-found">
               <div className="img-holder">
                  <img src="/assets/images/not-found-img.svg" />
               </div>
               <div className="content">
                  <h1>نیست!</h1>
                  <h2>صفحه مورد نظر یافت نشد.</h2>
                  <a href="#" className="button white medium-radius">
                     <h3>بازگشت</h3>
                  </a>
               </div>
            </div>
         </Layout>
      </Style>
   );
}
