
export default function ProductDescription(props){
    let {series, description} = props.data;

    let text = ` ${series} ${description}`;

    return (
        `${text.substr(0, 105)}`
    )
};
