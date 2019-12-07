import React from 'react';
import { mount } from 'enzyme';
import { Todo } from '../Todo';
import { Provider } from 'react-redux';
import { configureStore } from '../../store/store';

describe('test', () => {
    it('should render', () => {
        // assert
        mount(
            <Provider store={configureStore()}>
                <Todo />
            </Provider>
        );
    });
});