import { all, call, put, takeLatest } from 'redux-saga/effects';
import { setMusic } from './Features/musicSlice'; 
import { searchMusic } from './API'; 


function* fetchMusic(action) {
    try {
        const musicResults = yield call(searchMusic, action.payload);
        
        const filteredResults = [
            ...(musicResults.tracks?.items || []), 
            ...(musicResults.artists?.items || [])
        ];
        
        const top10Results = filteredResults.slice(0,9);
                  
        yield put(setMusic(top10Results));
    } catch (error) {
        console.error("Error fetching music:", error);
    }
}


function* watchFetchMusic() {
    yield takeLatest('music/search', fetchMusic); 
}


export default function* rootSaga() {
    yield all([watchFetchMusic()]);
}
