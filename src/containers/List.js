import React from 'react';
import styledComponents from 'styled-components';
import SubHeader from '../components/Header/SubHeader';
import ListItem from '../components/ListItem/ListItem';
import { useParams, useNavigate } from 'react-router-dom';
import { ListsContext } from '../context/ListsContextProvider';
import { ItemsContext } from '../context/ItemsContextProvider';

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

const List = () => {
    let params = useParams();
    let navigate = useNavigate();
    
    const { list, getListRequest } = React.useContext(ListsContext);
    const { loading, error, items, getItemsRequest } = React.useContext(
        ItemsContext,
    );
    
    //const items = items && items.filter(item => item.listId === parseInt(params.id));
    //const list = lists && lists.find(list => list.id === parseInt(params.id));
    React.useLayoutEffect(() => {
        if (!list.id) {
            getListRequest(params.id);
        }

        if (!items.length) {
            getItemsRequest(params.id);
        }
    }, [getItemsRequest, getListRequest, items, list, params.id]);    
    // if (items.length === 0) {
    //     error = "There are no items for this list.";
    // }
    //console.log(error);
    //console.log(loading);
    return (!loading && !error) ? (
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