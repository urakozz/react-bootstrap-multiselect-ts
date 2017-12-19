# react-bootstrap-multiselect-ts
[![NPM version](https://badge.fury.io/js/react-bootstrap-multiselect-ts.svg)](http://badge.fury.io/js/react-bootstrap-multiselect-ts)
[![Dependency Status](https://david-dm.org/urakozz/react-bootstrap-multiselect-ts.svg)](https://david-dm.org/urakozz/react-bootstrap-multiselect-ts)
[![devDependency Status](https://david-dm.org/urakozz/react-bootstrap-multiselect-ts/dev-status.svg)](https://david-dm.org/urakozz/react-bootstrap-multiselect-ts#info=devDependencies)

A multiselect component for react (with bootstrap). This is a TypeScript wrapper on top of: https://github.com/skratchdot/react-bootstrap-multiselect

## Installation

```bash
npm i -S react-bootstrap-multiselect-ts
```

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
