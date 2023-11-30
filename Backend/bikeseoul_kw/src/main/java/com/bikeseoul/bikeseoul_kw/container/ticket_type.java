package com.bikeseoul.bikeseoul_kw.container;

public enum ticket_type {
    one_day(1), seven_day(7), thirty_day(30), one_eighty_day(180), three_sixty_five_day(365);
    private int value;
    private ticket_type(int value) {
        this.value = value;
    }
    public int getValue() {
        return value;
    }

}

