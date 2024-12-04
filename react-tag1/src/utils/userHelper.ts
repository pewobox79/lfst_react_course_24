export const getSingleUser=async(id:string)=>{
    let error = false
    let success = false
    let loading = true
    let data:unknown


    try {

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const json = await response.json()
        data = json;
        success = true;
        setTimeout(()=>{
            loading = false;

        }, 3000)

    }
    catch (e) {
        console.error('Error fetching user:', e)
        error = true;
        loading  = false;
    }


    return {data, success, loading, error}
}