
export default function ProductDescription(props){
    let {brand, series, description} = props.data;

    let text = ` ${series} ${description}`;

    let ellipsis = (text.length >= 104) ? '...' : '';

    return (
        `${text.substr(0, 104)}${ellipsis}`
    )
};