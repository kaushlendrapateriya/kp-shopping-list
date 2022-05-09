import React from 'react';
import styledComponents from 'styled-components';
import withDataFetching from '../withDataFetching';
import SubHeader from '../components/Header/SubHeader';
import ListItem from '../components/ListItem/ListItem';
import { useParams, useNavigate } from 'react-router-dom';

const ListItemWrapper = styledComponents.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 2% 5%;
`;

const Alert = styledComponents.span`
    width: 100%;
    text-align: center;
`;

const List = ({ data, loading, error }) => {
    let params = useParams();
    let navigate = useNavigate();
    const items = data && data.filter(item => item.listId === parseInt(params.id));
    if (items.length === 0) {
        error = "There are no items for this list.";
    }
    return !loading && !error ? (
        <>
            {navigate && (
                <SubHeader 
                    goBack={() => navigate(-1)}
                    openForm={() => navigate(`/list/${params.id}/new`)}
                />
            )}
            <ListItemWrapper>
                {items && items.map(item => <ListItem key={item.id} data={item} />)}
            </ListItemWrapper>
        </>
    ) : (
        <>
            {navigate && (
                <SubHeader 
                    goBack={() => navigate(-1)}
                    openForm={() => navigate(`/list/${params.id}/new`)}
                />
            )}
            <Alert>{loading ? 'Loading...' : error}</Alert>
        </>
        
    );
};

export default withDataFetching({
    dataSource: 'https://my-json-server.typicode.com/pranayfpackt/-React-Projects/items',
})(List);