import React from "react";
import { render, } from '@testing-library/react'
import App from "./App";

// tentei
describe('Testando a apiDog', () => {

    test.skip('Testa se a  requisição se resolveu e teve como valor "request success".', async () => {
        // resultado da api
        const imgDog = {
            message: "https://images.dog.ceo/breeds/affenpinscher/n02110627_3026.jpg",
            status: "success"
        }

        // simulando api r
        jest.spyOn(global, 'fetch');
        global.fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue(imgDog.status),
        });
        render(<App />);


    });
});

// ------------------------------------------------------------------------------ GABARITO

const service = require("./ service");
describe("testando a requisição", () => {
    service.fetchDog = jest.fn();
    //afterEach -> https://jestjs.io/pt-BR/docs/setup-teardown
    afterEach(service.fetchDog.mockReset);

    test("testando requisição caso a promise resolva", async () => {
        service.fetchDog.mockResolvedValue("request success");

        service.fetchDog();
        expect(service.fetchDog).toHaveBeenCalled();
        expect(service.fetchDog).toHaveBeenCalledTimes(1);
        await expect(service.fetchDog()).resolves.toBe("request success");
        expect(service.fetchDog).toHaveBeenCalledTimes(2);
    });

    test("testando requisição caso a promise seja rejeitada", async () => {
        service.fetchDog.mockRejectedValue("request failed");

        expect(service.fetchDog).toHaveBeenCalledTimes(0);
        await expect(service.fetchDog()).rejects.toMatch("request failed");
        expect(service.fetchDog).toHaveBeenCalledTimes(1);
    });
});