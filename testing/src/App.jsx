import { useEffect, useState } from 'react';
import { Button, Card } from 'react-material-ss/dist/index';
import ControlPanel from './ControlPanel';
import { initalConfig } from './theme.config';

function App() {
  const [config, setConfig] = useState(initalConfig);

  useEffect(() => {
    fetch('http://localhost:3000/theme')
      .then((res) => res.json())
      .then((res) => setConfig(res))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const handleUpdateConfig = (newConfig) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      ...newConfig,
      Card: {
        ...prevConfig.Card,
        footer: (
          <Button
            text="Action Button"
            bgcolor={prevConfig.Button.bgcolor}
            onClick={() => console.log('Button clicked')}
          >
            Action Footer Button
          </Button>
        ),
      },
    }));
  };

  config.Card.footer = (
    <Button
      text="Action Button"
      bgcolor={config.Button.bgcolor}
      onClick={() => console.log('Button clicked')}
    >
      Action Footer Button
    </Button>
  );

  const circularReferenceReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return '[Circular Reference]';
        }
        seen.add(value);
      }
      return value;
    };
  };

  const saveTheme = () => {
    const jsonString = JSON.stringify(config, circularReferenceReplacer(), 2);

    navigator.clipboard.writeText(jsonString).then(
      function () {
        console.log('Async: Copying to clipboard was successful!');
      },
      function (err) {
        console.error('Async: Could not copy text: ', err);
      }
    );

    fetch('http://localhost:3000/theme', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: jsonString,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '20px',
        gap: '20px',
      }}
    >
      <ControlPanel
        config={config}
        onUpdateConfig={handleUpdateConfig}
        saveTheme={saveTheme}
      />
      <Button
        text={config.Button.text}
        bgcolor={config.Button.bgcolor}
        color={config.Button.color}
        outline={config.Button.outline}
        border={config.Button.border}
        borderRadius={config.Button.borderRadius}
        padding={config.Button.padding}
        margin={config.Button.margin}
        transition={config.Button.transition}
        disabled={config.Button.disabled}
        cursor={config.Button.cursor}
        bgcolorHover={config.Button.bgcolorHover}
        disabledElevation={config.Button.disabledElevation}
        fontWeight={config.Button.fontWeight}
        fontSize={config.Button.fontSize}
      >
        {config.Button.text}
      </Button>
      <Card
        variant={config.Card.variant}
        bgcolor={config.Card.bgcolor}
        color={config.Card.color}
        outline={config.Card.outline}
        border={config.Card.border}
        borderRadius={config.Card.borderRadius}
        fontWeight={config.Card.fontWeight}
        fontSize={config.Card.fontSize}
        padding={config.Card.padding}
        margin={config.Card.margin}
        display={config.Card.display}
        title={config.Card.title}
        subheader={config.Card.subheader}
        footer={config.Card.footer}
      >
        Card
      </Card>
    </div>
  );
}

export default App;

