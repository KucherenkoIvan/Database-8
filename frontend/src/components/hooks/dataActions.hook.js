import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRow, setItem, editRow, deleteRow } from '../../redux/actionCreators'


export const useDataActions = () => {
    const selectedItem = useSelector(state => state.selectedItem);
    const modelName = useSelector(state => state.option);
    const user = useSelector(state => state.userInfo.login);
    const dispatch = useDispatch();

    const saveClickHandler = useCallback((modelData) => {
        if (selectedItem) {
            editRow({ modelData, modelName, user })(dispatch);
        } else {
            createRow({ modelData, modelName, user})(dispatch);
        }
    }, [modelName, user, dispatch, selectedItem]);

    const cancelClickHandler = useCallback((setInputValue, defaultValue) => {
        setItem(null)(dispatch);
        setInputValue(defaultValue);
    }, [dispatch]);

    const deleteClickHandler =  useCallback((setInputValue, defaultValue) => {
        deleteRow({id: selectedItem.id, user, modelName })(dispatch);
        cancelClickHandler(setInputValue, defaultValue);
    }, [cancelClickHandler, dispatch, modelName, selectedItem, user]);

    return {deleteClickHandler, saveClickHandler, cancelClickHandler};
}
