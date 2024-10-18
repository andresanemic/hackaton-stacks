
;; title: DAOCreate
;; version:
;; summary:
;; description:

;; traits
;;

;; token definitions
;;

;; constants
;;
(define-constant contract-owner tx-sender)


;; data vars
;;

;; data maps
;;

;; public functions
;;

(define-public (createDao (name (string-utf8 500)) (symbol (string-utf8 500)) (total-supply uint)  ) 
    (begin
        (ok name)
      

    )
)
;; read only functions
;;

;; private functions
;;

