package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type HealthResponse struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(HealthResponse{
		Status:  "ok",
		Message: "DrukLink backend is running",
	})
}

func usersHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode([]string{})
}

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/api/health", healthHandler).Methods("GET")
	router.HandleFunc("/api/users", usersHandler).Methods("GET")

	log.Println("DrukLink API running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
