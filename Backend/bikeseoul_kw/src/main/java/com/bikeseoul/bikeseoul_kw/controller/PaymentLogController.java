package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.PaymentLog;
import com.bikeseoul.bikeseoul_kw.manager.PaymentLogManager;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
public class PaymentLogController {
    @Autowired
    private PaymentLogManager paymentLogManager;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/service/getPaymentLogList")
    @ResponseBody
    public String getPaymentLogList(@RequestParam("member_uid") int member_uid) {
        JsonObject jo = new JsonObject();
        if (member_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }

        JsonArray ja = new JsonArray();

        try {
            List<PaymentLog> paymentLogList = paymentLogManager.getPaymentLogList(member_uid);
            for (PaymentLog paymentLog : paymentLogList) {
                JsonObject item = new JsonObject();
                item.addProperty("uid", paymentLog.getUid());
                item.addProperty("user_id", paymentLog.getUser_id());
                item.addProperty("method_uid", paymentLog.getMethod_uid());
                item.addProperty("amount", paymentLog.getAmount());
                item.addProperty("ticket_detail_uid", paymentLog.getTicket_detail_uid());
                item.addProperty("status_", paymentLog.getStatus_().toString());
                item.addProperty("created_date", paymentLog.getCreated_date().format(dtf_kor));
                item.addProperty("updated_date", paymentLog.getUpdated_date().format(dtf_kor));
                item.addProperty("method_name", paymentLog.getMethod_name());
                item.addProperty("method_created_date", paymentLog.getMethod_created_date().format(dtf_kor));
                item.addProperty("ticket_type", paymentLog.getTicket_type().toString());
                item.addProperty("hours", paymentLog.getHours().toString());
                item.addProperty("cost", paymentLog.getCost());
                ja.add(item);
            }
            jo.addProperty("result", "success");
            jo.add("paymentLogList", ja);
            return jo.toString();
        } catch (Exception e) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
    }
    @GetMapping("/rest/service/getRefundLogList")
    @ResponseBody
    public String getRefundLogList(@RequestParam("member_uid") int member_uid) {
        JsonObject jo = new JsonObject();
        if (member_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }

        JsonArray ja = new JsonArray();

        try {
            List<PaymentLog> paymentLogList = paymentLogManager.getRefundLogList(member_uid);
            for (PaymentLog paymentLog : paymentLogList) {
                JsonObject item = new JsonObject();
                item.addProperty("uid", paymentLog.getUid());
                item.addProperty("user_id", paymentLog.getUser_id());
                item.addProperty("method_uid", paymentLog.getMethod_uid());
                item.addProperty("amount", paymentLog.getAmount());
                item.addProperty("ticket_detail_uid", paymentLog.getTicket_detail_uid());
                item.addProperty("status_", paymentLog.getStatus_().toString());
                item.addProperty("created_date", paymentLog.getCreated_date().format(dtf_kor));
                item.addProperty("updated_date", paymentLog.getUpdated_date().format(dtf_kor));
                item.addProperty("method_name", paymentLog.getMethod_name());
                item.addProperty("method_created_date", paymentLog.getMethod_created_date().format(dtf_kor));
                item.addProperty("ticket_type", paymentLog.getTicket_type().toString());
                item.addProperty("hours", paymentLog.getHours().toString());
                item.addProperty("cost", paymentLog.getCost());
                ja.add(item);
            }
            jo.addProperty("result", "success");
            jo.add("paymentLogList", ja);
            return jo.toString();
        } catch (Exception e) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
    }
}
