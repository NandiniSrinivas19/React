import React  from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';




   function RenderComments({comments})
    {
        if(comments != null) 
            return(

                    <div className="col-12 col-md-5 m-1">
                        <h4> Comments</h4>
                    
                       <ul className="List-unstyled">
                           {comments.map((com)=> {
                               return (
                               <li key={com.id}>    
                                 <p className="comment"> {com.comment}</p>
                                <p className="author">--{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</p>
                               </li>
                               );   
                             })}
                        </ul>
                    </div>
            );

      
                
        
        else
         return(
                <div></div>
              );              
       
}

    
   function RenderDish({dish}){
            return(
                <div className="col-12 col-md-5 m-1">
                   <Card>
                      <CardImg top src={dish.image} alt={dish.name} />
                      <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                         <CardText>{dish.description}</CardText>
                      </CardBody>
                  </Card>
                </div>
                );
              

       }

    const DishDetail = (props) => {

        if(props.dish !=null)
        return(
        <div className="container">  
          <div className="row">
            <RenderDish dish={props.dish}/>
             <RenderComments comments={props.dish.comments}/>

            </div>
         </div>
        );

       else
         return(
          <div>
          </div>
              );

       }



export default DishDetail;