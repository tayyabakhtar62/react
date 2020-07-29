import  React,{Component} from 'react';


import { CardBody,CardTitle,CardImg,CardImgOverlay,Card,CardText } from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);
        
    }

    

    render(){
        const menu =this.props.dishes.map((dish) =>{
            return(
            <div key={dish.id} className="mt-1 col-12 col-md-5">
                <Card onClick={()=> this.props.onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                  
            </div>
        );
    }

}

export default Menu