import { concatClasses } from "../../utils";

const Glass = ({ className, ...props }) => {
    return <div className={"glass " + className} {...props} />;
};

export default Glass;
