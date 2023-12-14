package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Board extends CommonData{
    private String board_name;
    private int read_level, write_level;
    private LocalDateTime updated_date;

    public Board(int uid, String board_name, int read_level, int write_level, LocalDateTime created_date, LocalDateTime updated_date) {
        super(uid, created_date);
        this.board_name = board_name;
        this.read_level = read_level;
        this.write_level = write_level;
        this.updated_date = updated_date;
    }
    public Board(int uid, String board_name, int read_level, int write_level) {
        super(uid, null);
        this.board_name = board_name;
        this.read_level = read_level;
        this.write_level = write_level;
    }
    public Board(String board_name, int read_level, int write_level) {
        super(0, null);
        this.board_name = board_name;
        this.read_level = read_level;
        this.write_level = write_level;
    }

    public String getBoard_name() {
        return board_name;
    }

    public void setBoard_name(String board_name) {
        this.board_name = board_name;
    }

    public int getRead_level() {
        return read_level;
    }

    public void setRead_level(int read_level) {
        this.read_level = read_level;
    }

    public int getWrite_level() {
        return write_level;
    }

    public void setWrite_level(int write_level) {
        this.write_level = write_level;
    }

    public LocalDateTime getUpdated_date() {
        return updated_date;
    }

    public void setUpdated_date(LocalDateTime updated_date) {
        this.updated_date = updated_date;
    }
}
