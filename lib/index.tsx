import * as React from "react";
import "react-bootstrap-multiselect/css/bootstrap-multiselect.css";

const MultiselectDist = require("react-bootstrap-multiselect/dist/index");

export interface MultiselectValue {
    value: string;
    label?: string;
    selected?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
}

export interface MultiselectProps {
    data: MultiselectValue[];
    onChange: (v: MultiselectValue[]) => void;
    buttonText?: ((options: any, select: any) => string) | string;
    selectAllText?: string;
    onSelectAll?: () => void;
    onDeselectAll?: () => void;
    multiple?: true;
    enableHTML?: boolean;
    enableClickableOptGroups?: boolean;
    enableCollapsibleOptGroups?: boolean;
    dropRight?: boolean;
    dropUp?: boolean;
    disableIfEmpty?: boolean;
    maxHeight?: number;
    disabledText?: string;
    onInitialized?: (select: any, container: any) => void;
    onDropdownShow?: (e: any) => void;
    onDropdownHide?: (e: any) => void;
    onDropdownShown?: (e: any) => void;
    onDropdownHidden?: (e: any) => void;
    buttonClass?: string;
    inheritClass?: boolean;
    buttonContainer?: string;
    buttonWidth?: string;
    buttonTitle?: (options: any, checked: any) => string;
    nonSelectedText?: string;
    nSelectedText?: string;
    allSelectedText?: string;
    numberDisplayed?: number;
    delimiterText?: string;
    optionLabel?: (element: any) => string;
    optionClass?: (element: any) => string;
    selectedClass?: string;
    includeSelectAllOption?: boolean;
    selectAllJustVisible?: boolean;
    selectAllValue?: any;
    selectAllName?: string;
    selectAllNumber?: boolean;
    enableFiltering?: boolean;
    enableCaseInsensitiveFiltering?: boolean;
    enableFullValueFiltering?: boolean;
    filterBehavior?: "text"|"value"|"both";
    filterPlaceholder?: string;
}

export class Multiselect extends React.PureComponent<MultiselectProps, {}> {

    static defaultProps = {
        onChange: () => {
        },
    };

    protected onChange = (option: any) => {
        if (option.length === 1) {
            this.props.onChange([{
                value: option[0].value,
                selected: option[0].selected,
                label: option[0].label
            }] as MultiselectValue[]);
        }
    };

    protected onSelectAll = () => {
        this.props.onChange(this.props.data.filter((v: MultiselectValue) => !v.selected).map((v: MultiselectValue) => {
            return Object.assign(v, {selected: true});
        }));
    };

    protected onDeselectAll = (e: any) => {
        this.props.onChange(this.props.data.filter((v: MultiselectValue) => v.selected).map((v: MultiselectValue) => {
            return Object.assign(v, {selected: false});
        }));
    };

    render(): JSX.Element {
        return (
            <MultiselectDist {...this.props}
                             onChange={this.onChange}
                             onSelectAll={this.props.onSelectAll || this.onSelectAll}
                             onDeselectAll={this.props.onDeselectAll || this.onDeselectAll}
                             ref="MultiselectInternal"/>
        );
    }
}