(define-read-only (say-hi)
  (ok "Hello World")
)

(define-read-only (echo-number (val int))
  (ok val)
)

(define-public (check-it (flag bool))
  (if flag (ok 1) (err u100))
)