const ControlPanel = ({ 
    iceLevel, 
    sugarLevel, 
    isHoneyActive, 
    isHotActive,
    handleIceChange,
    handleIceChangeEnd,
    handleSugarChange,
    handleSugarChangeEnd,
    setIsHoneyActive,
    setIsHotActive 
}) => {
    return (
        <div id="sugarIceArea">
            <img id="guidedbar" src="images/DIY/guidedbar.svg" alt="" />
            <div>
                <div id="barSet">
                    {/* 糖度滑塊 */}
                    <div className="slider-container">
                        <label className={isHoneyActive ? 'disabled' : ''}>
                            <div 
                                className={`sugar-level ${isHoneyActive ? 'disabled' : ''}`}
                                style={{height: `${sugarLevel}%`}}
                            />
                            <input
                                type="range"
                                id="ingredient2"
                                min="0"
                                max="100"
                                step="1"
                                value={sugarLevel}
                                onChange={(e) => handleSugarChange(e.target.value)}
                                onMouseUp={handleSugarChangeEnd}
                                onTouchEnd={handleSugarChangeEnd}
                                className={`snap-slider ${isHoneyActive ? 'disabled' : ''}`}
                                disabled={isHoneyActive}
                            />
                        </label>
                    </div>
                    
                    {/* 冰塊滑塊 */}
                    <div className="slider-container">
                        <label className={isHotActive ? 'disabled' : ''}>
                            <div 
                                className={`ice-level ${isHotActive ? 'disabled' : ''}`}
                                style={{height: `${iceLevel}%`}}
                            />
                            <input
                                type="range"
                                id="ingredient1"
                                min="0"
                                max="100"
                                step="1"
                                value={iceLevel}
                                onChange={(e) => handleIceChange(e.target.value)}
                                onMouseUp={handleIceChangeEnd}
                                onTouchEnd={handleIceChangeEnd}
                                className={`snap-slider ${isHotActive ? 'disabled' : ''}`}
                                disabled={isHotActive}
                            />
                        </label>
                    </div>
                </div>

                <div id="buttonSet">
                    <button 
                        id="honeyBtn"
                        className={isHoneyActive ? 'active' : ''}
                        onClick={() => setIsHoneyActive(!isHoneyActive)}
                    >
                        蜂蜜
                    </button>
                    <button 
                        id="hotBtn"
                        className={isHotActive ? 'active' : ''}
                        onClick={() => setIsHotActive(!isHotActive)}
                    >
                        熱飲
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ControlPanel; 