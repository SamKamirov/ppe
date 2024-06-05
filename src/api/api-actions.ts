import {createAsyncThunk} from '@reduxjs/toolkit';
import {SliceNames, SortTypes} from '../../const';
import {TAsyncThunk} from '../types/state';
import {
    AddSertificate,
    TEmployee,
    HeightRanges,
    Period,
    PPE,
    Preview,
    RuleReport,
    Sertificate,
    SetRule,
    Size,
    SizeType,
    TAddPPE,
    EmployeeAdd,
    EmployeeUpload,
} from '../types/ppe';
import {ContentTypes} from '../components/modals/source/const';
import {SizesReport} from '../store/report-data/report-data';

type TPPEData = {ppe: TAddPPE};
type TUploadPPE = {message: string};

type SetRuleData = {
    ppes: PPE[];
    periods: Period[];
    employees: TEmployee[];
    sertificates: Sertificate[];
};

type ReturnRule = {
    message: string;
};

type Sorting = {
    type: SortTypes;
};

const fetchPPEsAction = createAsyncThunk<PPE[], undefined, TAsyncThunk>(
    `${SliceNames.AppData}/fetchPPEs`,
    async (_arg, {dispatch, extra: api}) => {
        const {data} = await api.get('/ppes');
        dispatch(fetchHeightRanges());
        return data;
    }
);

const uploadPPEAction = createAsyncThunk<TUploadPPE, TPPEData, TAsyncThunk>(
    `${SliceNames.AppData}/uploadPPE`,
    async ({ppe}, {dispatch, extra: api}) => {
        const {data} = await api.post(`/ppes/upload`, {...ppe});
        dispatch(fetchPPEsAction());
        return data;
    }
);

const fetchPPEAction = createAsyncThunk<Preview, string | undefined | number, TAsyncThunk>(
    `${SliceNames.AppData}/fetchPPE`,
    async (ppeId: string | undefined, {extra: api}) => {
        const {data} = await api.get(`/ppes/${ppeId}`);
        return data;
    }
);

const deletePPEAction = createAsyncThunk<void, string | undefined | number, TAsyncThunk>(
    `${SliceNames.AppData}/deletePPE`,
    async (ppeId: string | undefined, {dispatch, extra: api}) => {
        console.log(ppeId);
        
        const {data} = await api.delete(`/ppes/${ppeId}`);
        dispatch(fetchPPEsAction());
        return data;
    }
);

const setModalType = createAsyncThunk<ContentTypes, ContentTypes, TAsyncThunk>(
    `${SliceNames.AppData}/setModalType`,
    async (contentType: ContentTypes) => {
        return contentType;
    }
);

const fetchSertificates = createAsyncThunk<Sertificate[], undefined, TAsyncThunk>(
    `${SliceNames.AppData}/fetchSertificates`,
    async (_arg, {extra: api}) => {
    const {data} = await api.get('/sertificates');
    return data;
});

const uploadSertificate = createAsyncThunk<AddSertificate,AddSertificate,TAsyncThunk>(
    `${SliceNames.AppData}/uploadSertificate`,
    async ({title}, {dispatch, extra: api}) => {
        const {data} = await api.post(`/sertificates`, {title});
        dispatch(fetchSertificates());
        return data;
    }
);

const fetchSizesReport = createAsyncThunk<SizesReport[],undefined,TAsyncThunk>(
    `${SliceNames.ReportData}/fetchSizesReport`,
    async (_agr, {extra: api}) => {
    const {data} = await api.get('/reports/sizes');
    return data;
});

const fetchHeightRanges = createAsyncThunk<HeightRanges[],undefined,TAsyncThunk>(
    `${SliceNames.AppData}/fetchHeightRanges`,
    async (_arg, {extra: api}) => {
    const {data} = await api.get('/ppes/height-ranges');
    return data;
});

const fetchEmployees = createAsyncThunk<TEmployee[], undefined, TAsyncThunk>(
    `${SliceNames.AppData}/fetchEmployess`,
    async (_arg, {extra: api}) => {
        const {data} = await api.get('/employee');
        return data;
    }
);

const fetchSetRuleAction = createAsyncThunk<SetRuleData, undefined, TAsyncThunk>(
    `${SliceNames.AppData}/fetchRuleSetData`,
    async (_arg, {extra: api}) => {
    const {data} = await api.get('/services');
    return data;
});

const setRuleAction = createAsyncThunk<void, SetRule, TAsyncThunk>(
    `${SliceNames.AppData}/setRule`,
    async ({setRuleItem}, {extra: api}) => {
        await api.post('/services', {...setRuleItem});
    }
);

const fetchRulesReport = createAsyncThunk<RuleReport[], undefined, TAsyncThunk>(
    `${SliceNames.ReportData}/fetchRulesReport`,
    async (_arg, {extra: api}) => {
        const {data} = await api.get('/reports/rules');
        return data;
    }
);

const setSorting = createAsyncThunk<SortTypes, SortTypes>(
    `${SliceNames.AppData}/setSorting`,
    async (type) => {
        return type;
    }
);

const fetchPeriods = createAsyncThunk<Period[], undefined, TAsyncThunk>(
    `${SliceNames.AppData}/fetchPeriods`,
    async (_arg, {extra: api}) => {
        const {data} = await api.get('/periods');
        return data;
    }
);

const fetchSizesTypes = createAsyncThunk<SizeType[], undefined, TAsyncThunk>(
    `${SliceNames.AppData}/fetchSizesTypes`,
    async (_arg, {extra: api}) => {
        const {data} = await api.get('/sizes');
        return data;
    }
);

const fetchSizeRanges = createAsyncThunk<Size[], undefined, TAsyncThunk>(
    `${SliceNames.AppData}/fetchSizeRanges`,
    async (_arg, {extra: api}) => {
        const {data} = await api.get('/sizes/ranges');
        return data;
    }
);

const fetchStructuralUnits = createAsyncThunk<SizeType[], undefined, TAsyncThunk>(
    `${SliceNames.AppData}/fetchStructuralUnits`,
    async (_arg, {extra: api}) => {
        const {data} = await api.get('/services/structuralUnits');
        return data;
    }
);

const fetchPositions = createAsyncThunk<SizeType[], undefined, TAsyncThunk>(
    `${SliceNames.AppData}/fetchPositions`,
    async (_arg, {extra: api}) => {
        const {data} = await api.get('/services/positions');
        return data;
    }
);

const uploadEmployee = createAsyncThunk<void, EmployeeUpload, TAsyncThunk>(
    `${SliceNames.AppData}/fetchPositions`,
    async ({employee}, {extra: api}) => {
        await api.post('/employee', employee);
    }
);

export {
    fetchPPEsAction,
    uploadPPEAction,
    fetchPPEAction,
    deletePPEAction,
    setModalType,
    uploadSertificate,
    fetchSertificates,
    fetchSizesReport,
    fetchHeightRanges,
    fetchEmployees,
    fetchSetRuleAction,
    setRuleAction,
    fetchRulesReport,
    setSorting,
    fetchPeriods,
    fetchSizesTypes,
    fetchSizeRanges,
    fetchStructuralUnits,
    fetchPositions,
    uploadEmployee
};
