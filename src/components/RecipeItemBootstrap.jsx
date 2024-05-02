import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../css/QueueItem.module.css";
import Layout from "../css/ItemPageLayout.module.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Enqueue }  from '../assets/enqueue.svg'
export default function RecipeItemBootstrap({ id, name, image, handleNameChange, handleImageChange, desciption , editLink,viewLink}){
  
  async function addToQueue(id) {
    console.log(id)
    await fetch(`api/recipe/queue/add/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
  }
    
        return (
            <div className={styles.wholeCard +" "+Layout.centerrow}>
              <Card className={styles.customCard} style={{ width: '18rem' }}>
                <Card.Body>
                  <div className={styles.innerBodyContainer}>
                    <Card.Img onChange={handleImageChange} className={styles.cardImg} src={image}/>
          
                    <div className={styles.cardTextContainer}>
                      <Card.Text onChange={handleNameChange} className={styles.cardText}>{name}</Card.Text>
                    </div>
                    <Link to={editLink} className={styles.iconContainer+ " "+styles.editButton}> 
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="25px">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
                            <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
                        </g>
                        </svg>
                    </Link>
                    <button onClick={() => addToQueue(id)} className={styles.enqueueButton} > 
                    <Enqueue  className={styles.enqueue}/>
                    </button>
                    <Link  to={viewLink} className={styles.viewButton}> View </Link>
                    
                  </div>
                </Card.Body>
                {desciption?
                <ListGroup className={Layout.text+" "+"list-group-flush"}>
                    <a href = {desciption}> {desciption}</a>
                </ListGroup>:<></>}
              </Card>
            </div>)
    
  
}