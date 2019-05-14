import { TypeKeysType } from './BaseTypeKeys';

type BaseAction = {
    type: string;
    error: string;
    data: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

type BaseReductionOptions<TState> = {
    state: TState;
    action: ActionParameter;
    dataProperty: keyof TState;
    typeKeys: TypeKeysType;
};

type ActionParameter = Partial<BaseAction>;

export const baseReducer = <TState>(props: BaseReductionOptions<TState>): TState => {
    const { action, dataProperty, state, typeKeys } = props;

    switch (action.type) {
        case typeKeys.SET_LOADER:
            return { ...state, [dataProperty]: { ...state[dataProperty], loading: true } };
        case typeKeys.SET_ERROR:
            return { ...state, [dataProperty]: { ...state[dataProperty], loading: false, error: action.error } };
        case typeKeys.SET_DATA:
            return { ...state, [dataProperty]: { ...state[dataProperty], loading: false, data: action.data } };
        default:
            return state;
    }
};