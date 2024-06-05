import { useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function Flower() {
    // const [flowerList, setFlowerList] = useState([]);

    const flowerCollectionRef = collection(db, "flowers");

    // Create a operation - Add a new flower to Firestore
    // const addFlower
    
    useEffect(() => {
        const getFlowerList = async () => {
            // Read the data, set movie list
            try {
                const data = await getDocs(flowerCollectionRef);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
        getFlowerList();
    }, [])


    return (  
        <div>
            <h2>Flower Page</h2>
            {/* <button className='pretty-button' onClick={getFlowerList}>get</button> */}
        </div>
    );
}



export default Flower;