import harvardArt from './data/harvardArt'
import { GalleryNavigation } from './components/GalleryNavigation';
import {GalleryView} from './components/GalleryView/index'
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records}/>
      <Switch>
        <Route path ="/">
          <h2>Page Not Found </h2>
        </Route>
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
