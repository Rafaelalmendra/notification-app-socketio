import './style.css';
import Notification from '../../assets/imgs/notification.svg';
import Message from '../../assets/imgs/message.svg';
import Settings from '../../assets/imgs/settings.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Test App</span>
      <div className="icons">
        <div className="icon">
          <img src={Notification} className="iconImg" alt="" />
          <div className="counter">2</div>
        </div>

        <div className="icon">
          <img src={Message} className="iconImg" alt="" />
          <div className="counter">2</div>
        </div>

        <div className="icon">
          <img src={Settings} className="iconImg" alt="" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;