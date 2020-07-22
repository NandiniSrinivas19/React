import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props){
        super(props);
    }


    renderComments(dish)
    {
        if(dish != null)
        {
       
          return  dish.comments.map((com) => {
               
                return(
                    
                    <ul key={com.id} className="list-unstyled">
                        <li className="comment"> {com.comment}</li>
                        <li className="author">--{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</li>
                    </ul>

                );
                    }
                )
                }
             else
                return(
                    <div></div>
                );              
       
}

    
    renderDish(dish){
        if (dish != null)
        {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
            }
        else
        {
           
            return(
                <div></div>
            );
            }    

    }

    render()
    {
        return(
        <div className="container">  
          <div className="row">
            <div  className="col-12 col-md-5 m-1">

                    {this.renderDish(this.props.dish)}
                    
            </div>
            <div  className="col-12 col-md-5 m-1">
               <Card>
                    <h4> Comments</h4>
                    {this.renderComments(this.props.dish)}
                    
                </Card>

            </div>
         </div>

        </div>


        );

    }

}

export default DishDetail;