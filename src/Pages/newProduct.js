import usePFetch from "./usePFetch";

function NewProduct(){
    const { isLoading, error, data, submitForm } = usePFetch(
        'http://localhost:8000/Product',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic',
            }),
        }
    );
    return null;
}
export default NewProduct;