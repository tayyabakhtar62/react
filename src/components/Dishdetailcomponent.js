import React,{Component} from 'react';
import { CardBody,CardTitle,CardImg,CardImgOverlay,Card,CardText,CardDeck } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props){
        super(props);
        this.state={}
        
    }
    renderComments(commentsArr){
        if(commentsArr != null){
            
        const comment = commentsArr.map((c)=>{
          return (
              <CardText>
                  <ul className="list-unstyled">
                      <li className="my-4">{c.comment}</li>
                      <li className="my-2 pl-5">--{c.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}{" "}</li>
                  </ul>
              </CardText>
          );  
        });
        return(
            <div>
                <h2>Comments</h2>
                {comment}
            </div>
        );
            
        }
        else{
            return(
                <div></div>
            );
        }
    }
    renderDish(dish){
        if(dish != null){
            return(
                <div>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle><bold>{dish.name}</bold></CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
        
    }

    render(){
        const dishItem = this.props.dish;
        if(dishItem != null){
            return(
                <div className="row">
                <div className="col-md-5 mt-4 col-12">
                    <Card>{this.renderDish(dishItem)}</Card>
                </div>
                <div className="col-md-5 mt-4 col-12">
                    <Card className="pl-3">{this.renderComments(dishItem.comments)}</Card>
                </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }

        
    }
}

export default Dishdetail;