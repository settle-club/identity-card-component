# PAN Card Component

This is a React component for displaying a PAN card with name and PAN number.

## Installation

1. Install the component:

    ```bash
    npm install git+https://github.com/settle-finance/identity-card.git
    ```

## Usage

1. Import the `PanCard` component in your project:
    ```jsx
    import { PanCard } from "identity-card"
    ```

2. Use the `PanCard` component in your application:
    ```jsx
    function App() {
      return (
        <div className="App">
          <PanCard name="John Doe" number="CWACM5036P" />
        </div>
      );
    }

    export default App;
    ```

## Component Description

- **PanCard.jsx**: The main component file that renders the PAN card.
- **PanCard.css**: CSS file for styling the PAN card component.

### Example Output

Here's an example output of the PAN card component:

![PAN Card Example](./src/assets/pan-card-output.png)
