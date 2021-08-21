import {FC} from "react";


const Sidebar: FC = ()=>{
    return (
        <div className="sidebar col-md-3">
            <div className="sidebar__info d-flex align-items-center justify-content-between">
                <div className="sidebar__myname">Some name</div>
                <div className="sidebar__settings">
                    <img src={require("../../../../assets/i/settings.svg").default} alt="Settings" />
                </div>
            </div>
            <div className="sidebar__search">
                <input type="text" placeholder="All treads" />
            </div>
            <div className="sidebar__channels">
                <div className="d-flex justify-content-between col-12">
                    <div className="sidebar__header">Channels</div>
                    <div className="sidebar__count">11</div>
                </div>
                <div className="sidebar__list">
                    <div className="sidebar__channel"># support</div>
                    <div className="sidebar__channel active"># general</div>
                </div>
            </div>
            <div className="sidebar__friends">
                <div className="d-flex justify-content-between col-12">
                    <div className="sidebar__header">friends</div>
                    <div className="sidebar__count">83</div>
                </div>
                <div className="sidebar__list">
                    <div className="sidebar__friend">
                        <div className="sidebar__friend__status"></div>
                        <div className="sidebar__friend__photo">
                            <img src={require("../../../../assets/img/photo.jpg").default} alt="Friend avatar" />
                        </div>
                        <div className="sidebar__friend__name">Orlando Diggs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;