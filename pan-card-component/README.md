# PAN Card Component

This is a React component for displaying a PAN card with name and PAN number.

## Installation
To use the PAN Card Component in your existing React project, follow these steps:

1. Download the Component:

    - Clone the repository:

        ```bash
        git clone https://github.com/settle-finance/identity-card.git
        ```

2. Copy the Component Files:

    - Navigate to the `pan-card-component` directory:

        ```bash
        cd identity-card/pan-card-component/src
        ```

    - Copy `PanCard.jsx`, `PanCard.css`, and the `assets` directory to your project's `src/components` directory (or another appropriate location):

        ```bash
        cp PanCard.jsx ../../path-to-your-project/src/components/
        cp PanCard.css ../../path-to-your-project/src/components/
        cp -r assets ../../path-to-your-project/src/components/
        ```

## Usage

1. Import the Component:
    - In your project, import the `PanCard` component in the desired file, for example, `App.jsx`:

        ```jsx
        import PanCard from "./components/PanCard"; // Adjust the path to where you placed the component files
        ```

2. Use the Component:
    - Use the PanCard component in your App component or any other component, passing the required props:

        ```jsx
        function App() {
            return (
                <div className="App">
                    <PanCard name="Jhon Doe" panNumber="CWACM5036P" />
                </div>
            );
        }

        export default App;
        ```

## Running the Project
To run the project, follow these steps:

1. Start the Development Server:

    - Run the following command to start the development server:

        ```bash
        npm run dev
        ```
2. Open Your Browser:
    - Open your browser and navigate to provided localhost URL to see the PAN card component in action.

## Component Description

- **PanCard.jsx**: The main component file that renders the PAN card.
- **PanCard.css**: CSS file for styling the PAN card component.
- **assets**: Directory containing images used in the component.

### Example Output

Here's an example output of the PAN card component:

![PAN Card Example](./src/assets/pan-card-output.png)