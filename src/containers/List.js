import React from 'react';
import styledComponents from 'styled-components';
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

const List = ({ list, items, loading, error, getItemsRequest, getListRequest }) => {
    let params = useParams();
    let navigate = useNavigate();
    //const items = items && items.filter(item => item.listId === parseInt(params.id));
    //const list = lists && lists.find(list => list.id === parseInt(params.id));
    React.useEffect(() => {
        if (!list.id) {
            getListRequest(params.id);
        }

        if (!items.length > 0) {
            getItemsRequest(params.id);
        }
    }, [items, list, params.id, getItemsRequest, getListRequest]);    
    // if (items.length === 0) {
    //     error = "There are no items for this list.";
    // }
    return !loading && !error ? (
        <>
            {navigate && list && (
                <SubHeader 
                    goBack={() => navigate(-1)}
                    title={list.title}
                    openForm={() => navigate(`/list/${params.id}/new`)}
                />
            )}
            <ListItemWrapper>
                {items && items.map(item => <ListItem key={item.id} data={item} />)}
            </ListItemWrapper>
        </>
    ) : (
        <>
            {navigate && list && (
                <SubHeader 
                    goBack={() => navigate(-1)}
                    title={list.title}
                    openForm={() => navigate(`/list/${params.id}/new`)}
                />
            )}
            <Alert>{loading ? 'Loading...' : error}</Alert>
        </>
        
    );
};

export default List;