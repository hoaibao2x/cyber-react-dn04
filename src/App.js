// import logo from './logo.svg';
import './App.css';
import BTGioHang from './BTGioHang/BTGioHang';
import BTGioHangRedux from './BTGioHangRedux/BTGioHangRedux';
// import QLUserRedux from './BTQuanLyUserRedux/QLUserRedux';
import QLUser from './BTQuanLyUser/QLUser';
import BTXemChiTiet from './BTXemChiTiet/BTXemChiTiet';
import CardRCC from './components/CardRCC/CardRCC';
import CardRFC from './components/CardRFC/CardRFC';
import DataBinding from './components/DataBinding/DataBinding';
import HandleEvent from './components/HandleEvent/HandleEvent';
import HomeComponent from './components/PracticeComponents/HomeComponent/HomeComponent';
import DemoArray from './DemoArray/DemoArray';
import DemoProps from './DemoProps/DemoProps';
import ShoesShop from './DemoProps/ShoesShop/ShoesShop';
import DemoState from './DemoState/DemoState';
import DemoStyling from './DemoState/DemoStyling';
import DoiMauXe from './DemoState/DoiMauXe/DoiMauXe';
import TangGiamFont from './DemoState/TangGiamFont';
import GameTaiXiu from './GameTaiXiu/GameTaiXiu';
import LifeCycleParent from './LifeCycle/LifeCycleParent';



// App là component chính của ứng dụng
// Chứa các thành phần component con
function App() {
  return (
    // Chỉ được có 1 thẻ bao bên ngoài
    // Thẻ jsx
    <div className="App">

      {/* <LifeCycleParent /> */}
      
      {/* <QLUserRedux /> */}

      <QLUser/>

      {/* <GameTaiXiu /> */}

      {/* <BTGioHangRedux /> */}

      {/* <BTGioHang /> */}

      {/* <BTXemChiTiet /> */}

      {/* <ShoesShop /> */}

      {/* <DemoProps /> */}

      {/* <DemoArray /> */}

      {/* <DoiMauXe /> */}

      {/* <DemoStyling /> */}

      {/* <TangGiamFont /> */}

      {/* <DemoState/> */}

      {/* <HandleEvent/> */}

      {/* <DataBinding /> */}

      {/* <HomeComponent></HomeComponent> */}

      {/* Thẻ component */}
      {/* <CardRCC/>
      <CardRFC/> */}
    </div>
  );
}

export default App;
