export default function Operation(props)
{
    let a=parseInt(props.a);
    let b=parseInt(props.b);
    let choice=parseInt(props.choice);

switch(choice)
{
    case 1:
        return("addition is:"+(a+b));
        break;
         case 2:
        return("substraction is:"+(a-b));
        break;
         case 3:
        return("multiple is:"+(a*b));
        break;
         case 4:
        return("division is:"+(a/b));
        break;
        default:
            return("invalid");

        
}
}