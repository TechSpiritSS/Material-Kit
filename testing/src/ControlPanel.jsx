/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';

const ControlPanel = ({ config, onUpdateConfig, saveTheme }) => {
  const [currentConfig, setCurrentConfig] = useState(config);

  const handleInputChange = (component, property, value) => {
    const updatedConfig = { ...currentConfig };
    updatedConfig[component][property] = value;
    setCurrentConfig(updatedConfig);
    onUpdateConfig(updatedConfig);
  };

  return (
    <div>
      <h2>Control Panel</h2>
      <button onClick={saveTheme}>Save Theme</button>
      {Object.entries(config).map(([component, properties]) => (
        <div key={component}>
          <h3>{component} Settings</h3>
          {Object.entries(properties).map(([property, value]) => (
            <div key={property}>
              <label>{property}</label>
              <input
                type="text"
                value={currentConfig[component][property]}
                onChange={(e) =>
                  handleInputChange(component, property, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ControlPanel;
