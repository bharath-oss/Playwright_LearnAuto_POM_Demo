import {test,expect} from '@playwright/test';

test("First Test",async({page})=>{
    expect(5).toBe(5);
});
test("Second Test",async({page})=>{
    expect(10).toBe(8);
});
test("Third Test",async({page})=>{
    expect(15.31).toBe(15.31);
});
test("Fourth Test",async({page})=>{
    expect("bhat").toBe("bhat");
});

test("Five Test",async({page})=>{
    expect(false).toBe(false); 
});

test("Six Test",async({page})=>{
    expect("Laptop is lenovo".includes("lenovo")).toBeFalsy();
});
