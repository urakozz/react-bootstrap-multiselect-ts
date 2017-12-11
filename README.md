# react-bootstrap-multiselect-ts

## Usage

```typescript jsx
import {MultiselectProps, Multiselect} from "react-bootstrap-multiselect-ts";

class MultiselectWrapper extends React.Component<MultiselectProps, {}> {
    static defaultProps = {
        onChange: () => {
        },
    };

    protected buttonText = (options: any, checked: any) => {
        const selected = options.length;
        const all = checked[0].length;

        if (all === 0 || selected === 0) {
            return "Nothing selected";
        } else if (selected === all) {
            return "All selected";
        } else {
            return `${selected} options selected`;
        }
    };
    
    render(): JSX.Element {
        return (
            <Multiselect multiple
                         buttonText={this.buttonText}
                         selectAllText="Select all"
                         {...this.props}/>
        );
    }
}

```
