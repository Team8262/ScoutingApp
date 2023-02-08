import { Component } from 'react';

class Temp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://api.github.com/repos/axios/axios',
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    render() {
        return (
            <div>
                <h1>Temp</h1>
            </div>
        );
    }
}