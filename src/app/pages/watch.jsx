import ForYou from "../../components/watch/for-you.jsx";
import MainComment from "../../components/watch/main-comment.jsx";
import Path from "../../components/watch/path.jsx";
import WatchContent from "../../components/watch/watch-content.jsx";
import WatchMain from "../../components/watch/watch-main.jsx";
import "../../styles/main.css";
const Watch = () => {
  return (
    <>
      <div className="container-minor">
        <div className="container-watch">
          <Path />
          <WatchMain />
          <WatchContent />
          <MainComment />
          <hr className="horizontal-lines" />
          <div className="for-you">
            <h1 className="main-title">Có thể bạn cũng thích</h1>
            <ForYou />
          </div>
        </div>
      </div>
    </>
  );
};

export default Watch;
