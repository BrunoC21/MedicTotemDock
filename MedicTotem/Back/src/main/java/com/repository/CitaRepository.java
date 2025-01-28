package com.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.models.Cita; 

@Repository
public interface CitaRepository extends JpaRepository<Cita, Long> {
    Optional<Cita> findById(Long id);
    List<Cita> findBySector(String sector);
    List<Cita> findByPacienteRutAndSector(String rut, String Sector);
    List<Cita> findByPacienteRut(String rut);
    List<Cita> findByProfesionalId(Long id);
}
