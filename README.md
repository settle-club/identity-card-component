# Identity Card Component

This is a React component for displaying a PAN card and Aadhaar card.

## Installation

1. Install the component:

   ```bash
   npm install git+https://github.com/settle-finance/identity-card.git
   ```

## Usage For Pancard

1. Import the `PanCard` component in your project:

   ```jsx
   import { PanCard } from "identity-card";
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

### Example Output For Pan Card

Here's an example output of the PAN card component:

![PAN Card Example](./src/assets/pan-card-output.png)

## Usage For Aadhaar Card

1. Import the `AadhaarCard` component in your project:

   ```jsx
   import { AadhaarCard } from "identity-card";
   ```

2. Use the `AadhaarCard` component in your application:

   ```jsx
   function App() {
     return (
       <div className="App">
         <AadhaarCard
           name="John Doe"
           dob="09/07/2000"
           gender="Male"
           number="XXXX XXXX 5555"
           image="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           address="205 B Wing Niwas House, MIDC Road"
           area="Andheri"
           district="Mumbai"
           state="Maharashtra"
           pincode="400072"
           color='crimson' //optional
         />
       </div>
     );
   }

   export default App;
   ```
3. To change the color of pagination circles use `color` prop. By default it is set to `blue` color.

### Example Output For Aadhaar Card

Here's an example output of the Aadhaar card component:

![AADHAAR Card Example](./src/assets/aadhaar-demo.gif)
