/// <reference types="react" />
import * as React from "react";
import "react-bootstrap-multiselect/css/bootstrap-multiselect.css";
export interface MultiselectValue {
    value: string;
    label?: string;
    selected?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
}
export interface MultiselectProps {
    className?: string;
    tabIndex?: number;
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
    filterBehavior?: "text" | "value" | "both";
    filterPlaceholder?: string;
}
export declare class Multiselect extends React.PureComponent<MultiselectProps, {}> {
    static defaultProps: {
        onChange: () => void;
    };
    protected onChange: (option: any) => void;
    protected onSelectAll: () => void;
    protected onDeselectAll: (e: any) => void;
    render(): JSX.Element;
}
