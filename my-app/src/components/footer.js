import React from "react";
import "../App.css";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer solid-bg">
        <div className="wf-wrap">
          <div className="wf-container-footer">
            <div className="wf-container">
              <section
                id="media_image-2"
                className="widget widget_media_image wf-cell wf-1-3"
              >
                {/*    <img width="33" height="13" src="img/logo.png" class="image wp-image-170  attachment-full size-full" alt="" style="max-width: 100%; height: auto;" srcset="assets/logo (3).png" sizes="(max-width: 336px) 100vw, 336px">*/}
              </section>
              <section
                id="text-2"
                className="widget widget_text wf-cell wf-1-3"
              >
                <div className="textwidget">
                  <p>
                    <br />
                    <br />
                    <strong>
                      My Itinerary
                      <br />
                    </strong>
                    <br />
                  </p>
                  <p> 2022 - MY ITINERARY</p>
                </div>
              </section>
              <section
                id="text-3"
                className="widget widget_text wf-cell wf-1-3"
              >
                <div className="textwidget">
                  <h4 style={{ textAlign: "center" }}>SEGUINOS!</h4>
                </div>
                <br />
                <br />
                <section className="buttons">
                  {/* <a
              href="https://es-la.facebook.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="fa fa-facebook"
            />
            <a
              href="https://twitter.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="fa fa-twitter"
            />
            <a
              href="mailto:myitinerary@gmail.com.ar"
              rel="noopener noreferrer"
              target="_blank"
              className="fa fa-google-plus"
            />
            <a
              href="https://www.youtube.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="fa fa-youtube"
            />
            <a
              href="https://ar.linkedin.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="fa fa-linkedin"
            />  */}
                </section>
              </section>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
