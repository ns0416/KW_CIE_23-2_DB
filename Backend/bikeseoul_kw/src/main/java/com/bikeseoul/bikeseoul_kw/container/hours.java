package com.bikeseoul.bikeseoul_kw.container;

public enum hours {
    one(1), two(2);

    private int value;

    private hours(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
